import React from "react";
const Education = () => {
  return (
    <section className="padding" id="education">
      <div className="center-content">
        <div className="row">
          <div className="col-md-8">
            {" "}
            {/* Adjust the column size as needed */}
            <h2 className="section-title">Education</h2>
            <br />
            <div className="education-container center-content">
              {/* Education Item 1 */}
              <div className="education-box">
                <h3>Universiti Teknologi Malaysia</h3>
                <p>Bachelor of Electronics Engineering with Honours (Year 4 Semester 2)</p>
                <p>Oct 2020 – Expected July 2024</p>
                <p>Major: Electronics System Design</p>
                <p>CGPA: 3.59/4.00</p>
              </div>

              {/* Education Item 2 */}
              <div className="education-box">
                <h3>Kolej Matrikulasi Labuan</h3>
                <p>Foundation in Science</p>
                <p>Jun 2019 - April 2020</p>
                <p>CGPA: 4.0</p>
                <p>MUET: Band 5</p>
              </div>

              {/* Education Item 3 */}
              <div className="education-box">
                <h3>SMK Tarat, Serian, Sarawak</h3>
                <p>SPM: 8A+ 1A 1B+</p>
                <p>Jan 2014 - Dec 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
