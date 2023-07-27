import logo from './logo.svg';
import {NavBarHeader2, NewItemsCollection, EditProfile} from "./ui-components";
import './App.css';
import { withAuthenticator, Divider} from "@aws-amplify/ui-react";
import {useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {CollegeOffCampusSell} from "./models";

function App({user, signOut}) {
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  const saveData = async () => {
      try {
        await DataStore.save(
          new CollegeOffCampusSell({
              name: name,
              address: location,
              description: email
            }
          )
        );
      } catch (err) {
        console.log(err);
      };
  }

  const editProfileOverrides = {
    "image": {
      src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
    },
    "TextField29766922": {
      onChange: (event) => {
        setName(event.target.value)
      }
    },
    "TextField29766923": {
      onChange: (event) => {
        setLocation(event.target.value)
      }
    },
    "TextField29766924": {
      placeholder: user?.attributes?.email,
      onChange: (event) => {
        setEmail(event.target.value)
      }
    },
    "Button": {
      onClick: saveData

      
    }
  }

  const navBarOverrides = {
    "Button39493466": {
      children: user?.attributes?.name
    },
    "Button39493467": {
      children: "Sign Out",
      onClick: signOut
    }

  }
  return (
    <div className="App">
      <NavBarHeader2 width= "100%" overrides={navBarOverrides}/>
      <header className="App-header">
        <h1>Web App</h1>
        <EditProfile style={{textAlign: "left", marginBottom: "20px" }} overrides={editProfileOverrides}/>
        <Divider />
        <NewItemsCollection />
      </header>
    </div>
  );
}

export default  withAuthenticator(App);
