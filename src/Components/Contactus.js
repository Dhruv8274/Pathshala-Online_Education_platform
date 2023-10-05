import React from 'react';
import './Contactus.css';
class BlackBackground extends React.Component {
  render() {
    const containerStyle = {
      backgroundColor: 'black',
      width: '100vw',
      height: '120vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <div style={containerStyle}>
        <div className="contactpage">
        <div className="contacticon">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Trirong, serif",
            }}
          >
            Contact Us!
          </h1>
          <div
            className="icon"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width:"100%",
              height:"35%"
            }}
          >
            <div className="firsticon">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Trirong, serif",
                }}
              >
                Address:
              </h3>
              <p>
                Pathshala Tech Pvt Ltd.
                <br />
                Plot No - A/B, Sector VII,
                <br />
                Noidas, Uttar Pradesh India PIN – 201
              </p>
            </div>
            <div className="firsticon">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Trirong, serif",
                }}
              >
                Phone:
              </h3>
              <p>
                +91-752 666 6666
                <br />
                +91-752 666 4444
                <br />
                Toll Free Number : 1800 102 102
              </p>
            </div>
            <div className="firsticon">
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Trirong, serif",
                }}
              >
                Email:
              </h3>
              <p>
                Email ID: pathshala4473@gmail.com
                <br />
                Alt Email: adminpathshala@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
         <div className="contactform" style={{padding:'20px',margin:'20px'}}>
          <div
            class="container"
            style={{
              padding: "0px",
              maxWidth: "40%",
              border: "4px solid #bc9864",
              borderRadius:"20px"
            }}
          >
            <label for="fname" style={{ color: "#bc9864" }}>
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              style={{ color: "rgb(69, 69, 69)" }}
            />

            <label for="lname" style={{ color: "#bc9864" }}>
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="country" style={{ color: "#bc9864" }}>
              Country
            </label>
            <select id="country" name="country">
              <option value="india">India</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label for="subject" style={{ color: "#bc9864" }}>
              Subject
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "100px", color: "rgb(69, 69, 69)" }}
            ></textarea>
            <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <input type="submit" value="Submit" className="submitbutton glowing-button" />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default BlackBackground;
