import { RecoilValue, selector, useRecoilValueLoadable } from "recoil";

export type error = {
  message: string;
};
export interface loadableReturn<T> {
  content: T|undefined;
  error: error;
  isLoading: boolean;
}

const Loadable = <T>(recoilValue: RecoilValue<T>) => {
  const { state, contents } = useRecoilValueLoadable(recoilValue);
  let result: loadableReturn<T> = {
    content: undefined,
    error: { message: "" },
    isLoading: false,
  };

  switch (state) {
    case "hasValue":
      result.isLoading = false;
      result.content = contents;
      return result; // val
    case "hasError":
      result.isLoading = false;
      result.error = {
        message: contents.message.toString(),
      };
      return result;
    case "loading":
      result.isLoading = true;
      return result;
    default:
      result.isLoading = false;
      result.error = {
        message: "Loadable is out of state",
      };
      return result;
  }
};

export default Loadable;
