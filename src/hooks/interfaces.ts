export interface IDidMountHook {
  handleStickersErrors: () => void;
  handleChoicesError: () => void;
  deps: any;
}
