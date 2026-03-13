import { FaGithub, FaGraduationCap, FaLinkedin, FaMailBulk, FaPhone, FaSchool, FaSuitcase, FaTwitter } from "react-icons/fa";
import Card from "../../components/Card/card";
import './home.css';
import { FaLocationPin } from "react-icons/fa6";

export default function Home() {
  return (
    <>

      <div className="container-fluid mt-4 mb-4">
        <div className="row">
          <div className="cols col-md-3">

            <Card>
              <div className="profile-card">
                <img src="/src/assets/aaaa.jpg" alt="Profile" />

                <p className="name">Abhilash Srivastava</p>
                <p className="role">Frontend Developer</p>
              </div>
              <div className="d-grid gap-2 mt-3 d-flex justify-content-around">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600" size={24}></FaLinkedin></a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-dark" size={24}></FaGithub>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400" size={24}></FaTwitter>
                </a>

              </div>


            </Card>


          </div>
          <div className="cols col-md-9">
            <Card>
              <div className="container-fluid">
                <h2 className="mb-3">About Me</h2>
                <p>
                  Hello! I'm Abhilash Srivastava, a passionate Frontend Developer with expertise in building responsive and user-friendly web applications. I love creating beautiful and functional interfaces that provide an excellent user experience.
                </p>
                <p>
                  With a strong foundation in HTML, CSS, and JavaScript, I specialize in Angular,React.js and have experience working with various frontend frameworks and libraries. I'm always eager to learn new technologies and stay updated with the latest trends in web development.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new design concepts, contributing to open-source projects, and connecting with fellow developers in the tech community.
                </p>

              </div>

              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="cols col-md-4">
                    <Card>


                      <div className="d-flex">

                        <FaSuitcase size={34} className="text-primary me-3" />

                        <div>
                          <p className="fw-bold mb-0">Experience</p>
                          <p className="text-muted mb-0">9</p>
                        </div>

                      </div>

                    </Card>
                  </div>
                  <div className="cols col-md-4">
                    <Card>
                      <div className="d-flex">
                        <FaGraduationCap className="text-primary me-3" size={34}></FaGraduationCap>
                        <div>
                          <p className="fw-bold mb-0">Qualification</p>
                          <p className="text-muted mb-0">Master's Degree</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="cols col-md-4">
                    <Card>
                      <div className="d-flex">
                        <FaLocationPin className="text-primary me-3" size={34}></FaLocationPin>
                        <div>
                          <p className="fw-bold mb-0">Location</p>
                          <p className="text-muted mb-0">Gr. Noida,India</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="row">
                  <div className="cols col-md-5">
                    <Card>
                      <div className="d-flex">
                        <FaMailBulk className="text-primary me-3" size={34}></FaMailBulk>
                        <div>
                          <p className="fw-bold mb-0">Email</p>
                          <p className="text-muted mb-0">abhilash.srivastava@gmail.com</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="cols col-md-4">
                    <Card>
                      <div className="d-flex">

                        <FaPhone className="text-primary me-3" size={24}></FaPhone>
                        <div>
                          <p className="fw-bold mb-0">Phone</p>
                          <p className="text-muted mb-0">+91 9205262364</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

            </Card>
          </div>
        </div>
      </div>
    </>
  );
}