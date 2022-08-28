import { useEffect, useState } from "react";

const About = () => {
    const [place, setPlace]= useState()
    useEffect(() => {
        const url = `http://localhost:5000/visit`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((data) => setPlace(data));
      }, []);
      console.log(place)
    
    return (
        <div>
           
           <div class="hero min-h-screen bg-base-200">
           
  
  <h1 className='text-7xl '>About Us</h1>
 
  
 
 
      </div>
      <div class="card-body ">
  Beriye pori is a online Travel Management user-friendly website. The user can easily 
understand and book all packages in this website.  In this website, there are various 
types of forms, like all types of packages, custom package user Registration Page in 
which user can insert his personal needs & facilities then upload his form by which 
user can register in the web site. In this website user can also pay money through in 
online. This site provides different tour packages, Customized packages, corporate 
tour, study tour. The travel agencies that currently exist make packages around 
popular places Where people can easily go to and there is nothing new in their 
packages. There is not much detail in the packages. Most of the packages do not 
include hotels, resorts, meals and customers are embarrassed. At present travel 
agencies have to go to their office to book the packages and make the payment which 
is very time consuming for the time being.
Beriye pori provide online booking system through which a user can book their 
desired travelling packages and they also can view the map of their destination. 
Mostly, websites provide the facility to just view the basic information about 
different travelling places, without a map or online booking system. Beriye pori
provide facility to users to plan their trip according to their budget. This web 
application also gives discount on some travelling packages that are booked through 
this portal.
  </div>
        </div>
    );
};

export default About;