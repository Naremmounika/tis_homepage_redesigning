import "./index.css"

const Admissions = () => {
  return (
    <section className="admissions" id="admissions">
      <div className="admissions-container">
        <form className="enquiry-form">
          <h3>Enquire Now!</h3>

          <div className="form-row">
            <input
              type="text"
              placeholder="Enter your Full Name...."
              aria-label="Full Name"
            />

            <input
              type="email"
              placeholder="Enter Email Id (Optional)"
              aria-label="Email"
            />
          </div>

          <div className="mobile-row">
            <select aria-label="Country code" defaultValue="+91">
              <option value="+91">+91</option>
            </select>

            <input
              type="tel"
              placeholder="Enter your Mobile No...."
              aria-label="Mobile Number"
            />

            <button type="button">Send OTP</button>
          </div>

          <div className="otp-row">
            <input
              type="text"
              placeholder="Enter OTP"
              aria-label="OTP"
            />

            <button type="button">Verify OTP</button>
          </div>

          <div className="form-row">
            <select aria-label="Select Class" defaultValue="">
              <option value="" disabled>
                Select Class
              </option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>

            <select aria-label="Select State" defaultValue="">
              <option value="" disabled>
                Select State
              </option>
              <option value="andhra-pradesh">Andhra Pradesh</option>
              <option value="telangana">Telangana</option>
              <option value="delhi">Delhi</option>
              <option value="karnataka">Karnataka</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label className="consent">
            <input type="checkbox" />
            <span>
              I Agree to receive information regarding my submitted
              application by signing up on Tulas International School,
              Dehradun
            </span>
          </label>

          <button type="submit" className="enquire-submit">
            Enquire Now
          </button>
        </form>
      </div>
    </section>
  )
}

export default Admissions