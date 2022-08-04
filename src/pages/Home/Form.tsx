import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import useDidMountEffect from "../../hooks";

const Form = () => {
  const [stickers, setStickers] = useState<string>("0");
  const [stickersError, setStickersError] = useState<boolean>(false);
  const [choices, setChoices] = useState<string[]>([]);
  const [errorChoices, setErrorChoices] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleStickersErrors = () => {
    if (!+stickers) return setStickersError(() => true);

    return setStickersError(() => false);
  };

  const handleChoicesError = () => {
    if (!choices.length) return setErrorChoices(() => true);

    return setErrorChoices(() => false);
  };

  const addSticker = useCallback(() => {
    setStickers((stickers) => `${Number(stickers) + 1}`);
  }, [stickers]);

  const subSticker = useCallback(() => {
    if (Number(stickers) > 0)
      setStickers((stickers) => `${Number(stickers) - 1}`);
  }, [stickers]);

  const handleChoices = (e: ChangeEvent<HTMLInputElement>) => {
    if (choices.includes(e.target.value)) {
      const newChoices = choices.filter((item) => item !== e.target.value);
      return setChoices(newChoices);
    }
    return setChoices((choices) => [...choices, e.target.value]);
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    handleStickersErrors();
    handleChoicesError();

    if (stickers && choices.length) return setShowSuccess(() => true);

    return setShowSuccess(() => false);
  };

  const deps = [choices, stickers];

  useDidMountEffect({ handleStickersErrors, handleChoicesError, deps });

  useEffect(() => {
    if (errorChoices || stickersError) return setShowSuccess(() => false);
  }, [errorChoices, stickersError]);

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
          <div className="flex w-full gap-2 md:w-1/2">
            <Button
              type="button"
              square
              disabled={stickersError}
              onClick={subSticker}
            >
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
            <Button type="button" square onClick={addSticker}>
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
          bg-textarea-bg rounded-md text-dark-grey font-test-font p-4"
          />
        </div>
      </form>
      <div
        className={`flex 
        ${showSuccess ? "justify-around" : "justify-end px-8"} 
        items-center bg-textarea-bg py-8`}
      >
        {showSuccess && (
          <p className="font-test-font text-lg text-green-success font-semibold">
            Formulário enviado com sucesso
          </p>
        )}

        <Button
          form="sticker-form"
          type="submit"
          disabled={errorChoices || stickersError}
        >
          ENVIAR
        </Button>
      </div>
    </>
  );
};
export default Form;
