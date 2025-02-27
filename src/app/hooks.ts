import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

/**
 * @description
 * This is a typed custom hook that allows us to use the redux store 
 * in our components with type safety and no need to pass the types
 * explicitly to the useSelector and useDispatch hooks.
 * @returns {useAppSelector} - A function that returns the state of the store.
 * @returns {useAppDispatch} - A function that dispatches an action to the store.
 */
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();