import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contactsReducer from "../src/Features/Contacts/ContactsSlice";

const store = createStore(contactsReducer, applyMiddleware(thunk));

export default store;
