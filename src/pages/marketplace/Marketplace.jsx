import React, { useState, useEffect } from 'react'
import './Marketplace.css'
import Kunle from "../../assets/Kunle.jpg";

const Card = ({ imageURL, name, location, slotsAvailable, price, link }) => {
    return (
        <div className="card">
          <div className='card-direction'>
          <div className='card_img'>
          <img src={imageURL} alt={name} />
          </div>
          <div className='card-details'>
          <h2>{name}</h2>
          <p>{location}</p>
          <p>{slotsAvailable} slots available</p>
          <p>{price} per slot</p>
          <a className='linking' href={link}>------+</a>
          </div>
          </div>
        </div>
      );
    };
    
    const Marketplace = () => {
      const [properties, setProperties] = useState([]);
    
      useEffect(() => {
        // Fetch data from API here
        // Update state with fetched data using setProperties
      }, []);

  return (
      <div className="container">
            <div className='market__btn'>
                <button className='primary-button'>Primary market</button>
                <button className='secondary-button'>Secondary market</button>
            </div>

            <div className='market__sales'>
                <a className='real_project' href='real bank'>Real Bank</a>
                <a className='real_project' href='real project'>Real Project</a>
                <a className='real_assest' href='real assest'>Real Assest</a>
            </div>
            
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adispicing elit. Nullam condimentum mauris eu
                fells congue, in scelerisque odio euismod. maecenas aliquet risus at eleifend hendrerit.
            </p>
            <div className="cards">
        <Card
          imageURL={ Kunle }
          name="Property 1"
          location="New York, NY"
          slotsAvailable={3}
          price={50}
          link="https://example.com/property1"
        />
        <Card
          imageURL={ Kunle }
          name="Property 2"
          location="Los Angeles, CA"
          slotsAvailable={1}
          price={75}
          link="https://example.com/property2"
        />
        <Card
          imageURL={ Kunle }
          name="Property 3"
          location="Chicago, IL"
          slotsAvailable={5}
          price={40}
          link="https://example.com/property3"
        />
        <Card
          imageURL={ Kunle }
          name="Property 4"
          location="Houston, TX"
          slotsAvailable={2}
          price={65}
          link="https://example.com/property4"
        />
        <Card
          imageURL={ Kunle }
          name="Property 5"
          location="Philadelphia, PA"
          slotsAvailable={4}
          price={55}
          link="https://example.com/property5"
        />
        <Card
          imageURL={ Kunle }
          name="Property 6"
          location="Phoenix, AZ"
          slotsAvailable={3}
          price={45}
          link="https://example.com/property6"
        />
      </div>
    </div>
  );

            {/* <div className='market__main'>
                <div className='market__cards'>
                    <img src={ daniel } alt="" style={{width: "100%", height: "40%"}}/>
                    <h1>Property Name</h1>
                    <h2>Location: Awka, Anambra State</h2>
                    <p>#5000/slots</p>
                    <Link to='/'>Learn More --</Link>
                </div>

                <div className='market__cards'>
                    <img src={ daniel } alt="" style={{width: "100%", height: "40%"}}/>
                    <h1>Property Name</h1>
                    <h2>Location: Awka, Anambra State</h2>
                    <p>#5000/slots</p>
                    <Link to='/'>Learn More --</Link>
                </div>

                <div className='market__cards'>
                    <img src={ daniel } alt="" style={{width: "100%", height: "40%"}}/>
                    <h1>Property Name</h1>
                    <h2>Location: Awka, Anambra State</h2>
                    <p>#5000/slots</p>
                    <Link to='/'>Learn More --</Link>
                </div>
            </div>
        </div>
  ) */}
}

export default Marketplace