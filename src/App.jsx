import MainContext from "./MainContext";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import BrandsData from "../src/brands.json";
import Copied from "./components/Copied";
import RouterProviderLayout from "./components/router-provider/RouterProviderLayout";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => brandsArray.push(BrandsData[key]));

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    // useEffect içinde tanımlanan bir değişken, zaman aşımı sürecinin kimliğini temsil eder
    let timeoutId;

    // 'copied' değeri değiştiğinde çalışacak olan kod bloğu
    if (copied) {
      // Eğer 'copied' true ise, 1800 milisaniye (1.8 saniye) sonra setCopied(null) çalışacak
      timeoutId = setTimeout(() => {
        setCopied(null);
      }, 1800);
    }

    // useEffect bir sonraki çalıştığında önceki zaman aşımı sürecini temizlemek için kullanılır
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
  }, [search]);

  const data = {
    brands,
    setSelectedBrands,
    selectedBrands,
    setCopied,
    search,
    setSearch,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <RouterProviderLayout />
      </MainContext.Provider>
    </>
  );
}

export default App;
