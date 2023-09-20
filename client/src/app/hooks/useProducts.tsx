import { useEffect } from "react";
import {
  productsSelectors,
  fetchProductsAsync,
  fetchFilters,
} from "../../features/catalog/catalogSlice";
import { useAppSelector, useAppDispatch } from "../store/configureStore";

const useProducts = () => {
  const products = useAppSelector(productsSelectors.selectAll);
  const { productsLoaded, filtersLoaded, brands, types, metaData } =
    useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  return { products, productsLoaded, filtersLoaded, brands, types, metaData };
};

export default useProducts;
