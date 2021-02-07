import { object } from "yup/lib/locale";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import LoginScreen from "../screens/LoginScreen";
import MessagesScreen from "../screens/MessagesScreen";
import RegisterScreen from "../screens/RegisterScreen";

export default Object.freeze({
  LISTING_DETAILS: "ListingsDetails",
  LISTING_EDIT: ListingEditScreen,
  LOGIN: "Login",
  MESSAGES: "Messages",
  REGISTER: "Register",
});
