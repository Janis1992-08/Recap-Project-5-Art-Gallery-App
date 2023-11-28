import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [artPieceInfo, setArtPieceInfo] = useLocalStorageState("art-piece-info", {
    defaultValue: [] }
  );
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieceInfo={artPieceInfo} />
    </>
  );
}
