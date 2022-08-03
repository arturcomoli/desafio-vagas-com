import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import useDidMountEffect from "../../hooks";

const Form = () => {
  const [stickers, setStickers] = useState<string>("0");
  const [stickersError, setStickersError] = useState<boolean>(false);
  const [choices, setChoices] = useState<string[]>([]);
  const [errorChoices, setErrorChoices] = useState<boolean>(false);

  const handleStickersErrors = () => {
    if (!+stickers) return setStickersError(true);

    return setStickersError(false);
  };

  const handleChoicesError = () => {
    if (!choices.length) return setErrorChoices(true);

    return setErrorChoices(false);
  };

  const handleChoices = (e: ChangeEvent<HTMLInputElement>) => {
    if (choices.includes(e.target.value)) {
      const newChoices = choices.filter((item) => item !== e.target.value);
      return setChoices(newChoices);
    }
    return setChoices([...choices, e.target.value]);
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    handleStickersErrors();
    handleChoicesError();
    console.log("oi");
  };

  const deps = [choices, stickers];

  useDidMountEffect({ handleStickersErrors, handleChoicesError, deps });

  // useEffect(() => {
  //   if (didMount.current) handleChoicesError();
  //   didMount.current = true;
  // }, [choices]);

  return (
    <>
      <form
        className="my-8 flex flex-col gap-8 px-8"
        id="sticker-form"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-dark-grey text-lg font-test-font font-semibold">
            Quais Stickers?
          </h2>
          <Checkbox
            label="React"
            value="react"
            name="choices"
            error={errorChoices}
            onChange={handleChoices}
          />
          <Checkbox
            label="Vue"
            value="vue"
            name="choices"
            error={errorChoices}
            onChange={handleChoices}
          />
          <Checkbox
            label="Angular"
            value="angular"
            name="choices"
            error={errorChoices}
            onChange={handleChoices}
          />
        </div>
        <div>
          <h2 className="mb-4 text-dark-grey text-lg font-test-font font-semibold">
            Quantos stickers de cada?
          </h2>
          <div className="flex w-1/2 gap-2">
            <Button type="button" square>
              -
            </Button>
            <input
              type="number"
              min="0"
              value={stickers}
              onChange={(e) => setStickers(e.target.value)}
              className={`form-input w-16 rounded-md appearance-none text-center border-2
              ${
                stickersError
                  ? "bg-light-err border-str-err"
                  : "bg-textarea-bg border-btn-blue"
              }`}
            />
            <Button type="button" square>
              +
            </Button>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-dark-grey text-lg font-test-font font-semibold">
            Observações:
          </h2>
          <textarea
            rows={7}
            className="form-textarea w-full border-2 border-btn-blue 
          bg-textarea-bg rounded-md"
          />
        </div>
      </form>
      <div className="flex justify-around items-center bg-textarea-bg py-8">
        <p className="font-test-font text-lg text-green-success font-semibold">
          Formulário enviado com sucesso
        </p>
        <Button form="sticker-form" type="submit">
          ENVIAR
        </Button>
      </div>
    </>
  );
};
export default Form;
