import React from 'react';
import DropdownRow from './DropdownRow';
import './SearchPage.css';
import RowCard from "./RowCard";
import SideBar from "./SideBar";
import NavBar from "./NavBar";


const SearchPage = () => {
    
  const options1 = ['Option 1.1', 'Option 1.2', 'Option 1.3'];
  const options2 = ['Option 2.1', 'Option 2.2', 'Option 2.3'];
  const options3 = ['Option 3.1', 'Option 3.2', 'Option 3.3'];
  const options4 = ['Option 4.1', 'Option 4.2', 'Option 4.3'];

  const users = [{
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg',
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },
  {
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg',
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },
  {
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg', 
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },{
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg',
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },
  {
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg',
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },
  {
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg',
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },
  {
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg', 
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  },{
    name: 'Samaram',
    photoUrl: 'https://5.imimg.com/data5/DE/VA/GX/ANDROID-14207901/product-jpeg-500x500.jpg',
    qualification: 'Criminal Lawyer',
    bio: 'I am a Criminal Lawyer with 5 years of experience.',
  }];



  return (
    <div>
        <NavBar/>
        <SideBar/>

        <div className="content" >
            <h1>Find a Lawyer</h1>
            <DropdownRow options1={options1} options2={options2} options3={options3} options4={options4} />
            {users.map((user) => (
                <RowCard user={user} />
            ))}
        </div>

    </div>
  );
};

export default SearchPage;
