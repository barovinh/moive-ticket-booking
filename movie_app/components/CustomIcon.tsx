import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import icoMoonConfig from '../../movie_app/selection.json';

const expoFontName = 'app_icons'; 
const expoAssetId = require('../assets/fonts/app_icons.ttf');

export default createIconSetFromIcoMoon(icoMoonConfig, expoFontName, expoAssetId);
