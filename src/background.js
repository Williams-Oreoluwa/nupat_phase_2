import React from "react";

const Home = () => {
  return (
    <>
      <Task />
    </>
  );
};

const Task = () => {
  const testData_1 = [{ bgcolor: "#EBEBEB", completed: 20 }];
  const testData_2 = [{ bgcolor: "#FF5F37", completed: 60 }];
  const testData_3 = [{ bgcolor: "#8BC488", completed: 100 }];
  return (
    <>
      <div className="task">
        <div className="task-wrapper">
          <div className="items">
            <div className="task-box">
              <h3>To Do</h3>
              <div className="number">
                <h3>3</h3>
              </div>
            </div>
            <div
              className="hero-container"
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "12px",
              }}
            >
              <div className="image">
                <img
                  src="/images/🖼️ Card-Image.png"
                  alt=""
                  className="normal-pic"
                />
              </div>
              <article
                className="text"
                style={{ display: "grid", gap: ".6rem", paddingTop: ".6rem" }}
              >
                <div
                  className="text-stuffs"
                 
               
                >
                  <h2>Highfidelity Design</h2>
                  <img
                    src="/images/3-dots.png"
                    alt=""
                    style={{ fontSize: ".5rem", position:'relative', right:'1rem' }}

                  />
                </div>

                <p>Make clear design and color</p>
              </article>
              <br />
              <div
                className="progress"
                style={{ display: "grid", gap: "1rem" }}
              >
                <div
                  className="loads"
                  style={{
                    display: "flex",
                    gap: "4rem",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <div className="proge">
                    <div
                      className="progress-loader"
                    
                    >
                      <img src="/images/today-3.png" alt="" />
                      <h3>Progress</h3>
                    </div>
                    <div className="ratings">
                      <h3>2/10</h3>
                    </div>
                  </div>
                </div>

                <div className="loader">
                  {testData_1.map((item, index) => (
                    <ProgressBar
                      key={index}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="usability-testing">
              <div
                className="usability-text"
                style={{ display: "grid", gap: "1rem", placeItems: "left" }}
              >
                <h2>Usability Testing</h2>
                <div className="sample-text">
                  <h4>Make clear design and color</h4>
                </div>
                <div
                  className="progress-again-stuff"
                  style={{ display: "flex", gap: "3rem", paddingTop: ".9rem" }}
                >
                  <div className="proge">
                    <div
                      className="progress-loader"
                     
                    >
                      <img src="/images/today-3.png" alt="" />
                      <h3>Progress</h3>
                    </div>
                    <div className="ratings">
                      <h3>2/10</h3>
                    </div>
                  </div>
                </div>
                {testData_1.map((item, index) => (
                  <ProgressBar
                    key={index}
                    bgcolor={item.bgcolor}
                    completed={item.completed}
                  />
                ))}
                <div className="comments">
                  <div
                    className="comment-items"
                    style={{ display: "flex", gap: "2rem" }}
                  >
                    <div
                      className="comment-each"
                      style={{ display: "flex", gap: "1rem" }}
                    >
                      <div
                        className="one"
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/images/today-1.png"
                          alt=""
                          style={{ height: "17px" }}
                        />
                        <h4>7</h4>
                      </div>
                      <div
                        className="one"
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/images/today-2.png"
                          alt=""
                          style={{ height: "13px", width: "16px" }}
                        />
                        <h4>2</h4>
                      </div>
                    </div>

                    <div className="image">
                      <img
                        className="img image1"
                        src="/images/image 8 (1).png"
                        alt=""
                      />
                      <img
                        className="img image2"
                        src="/images/image 8.png"
                        alt=""
                      />
                      <img
                        className="img image3"
                        src="/images/image 8.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="task-btn">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img src="/images/plus.png" alt="" />
                Add Task
              </button>
            </div>
          </div>

          <div className="items">
            <div className="task-box first-task">
              <h3>In progress</h3>
              <div className="number">
                <h3>3</h3>
              </div>
            </div>
            <div
              className="hero-container"
              style={{
                background: "white",
                padding: "1rem",
                borderRadius: "12px",
              }}
            >
              <div className="image">
                <img src="/images/pic2.png" alt="" className="pic2" />
              </div>
              <article
                className="text"
                style={{ display: "grid", gap: ".6rem", paddingTop: ".6rem" }}
              >
                <div
                  className="text-stuffs"
                 
                >
                  <h2>Highfidelity Design</h2>
                  <img
                    src="/images/3-dots.png"
                    alt=""
                   
                  />
                </div>

                <p>Make clear design and color</p>
              </article>

              <br />

              <div
                className="progress"
                style={{ display: "grid", gap: "1rem" }}
              >
                <div
                  className="loads"
                  style={{
                    display: "flex",
                    gap: "4rem",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <div className="proge">
                    <div
                      className="progres-loader"
                      style={{ display: "flex", gap: "1rem" }}
                    >
                      <img src="/images/today-3.png" alt="" />
                      <h3>Progress</h3>
                    </div>
                    <div className="ratings">
                      <h3>2/10</h3>
                    </div>
                  </div>
                </div>

                <div className="loader">
                  {testData_2.map((item, index) => (
                    <ProgressBar
                      key={index}
                      bgcolor={item.bgcolor}
                      completed={item.completed}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="task-btn">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img src="/images/plus.png" alt="" />
                Add Task
              </button>
            </div>
          </div>
          <div className="items  center-item">
            <div className="task-box first-task">
              <h3>Completed</h3>
              <div className="number">
                <h3>3</h3>
              </div>
            </div>
            <div className="usability-testing">
              <div
                className="usability-text"
                style={{ display: "grid", gap: "1rem", placeItems: "left" }}
              >
                <h2>Usability Testing</h2>
                <div className="sample-text">
                  <h4>Make clear design and color</h4>
                </div>
                <div
                  className="progress-again-stuff"
                  style={{ display: "flex", gap: "3rem", paddingTop: ".9rem" }}
                >
                   <div className="proge">
                    <div
                      className="progres-loader"
                      style={{ display: "flex", gap: "1rem" }}
                    >
                      <img src="/images/today-3.png" alt="" />
                      <h3>Progress</h3>
                    </div>
                    <div className="ratings">
                      <h3>10/10</h3>
                    </div>
                  </div>
                
                </div>
                {testData_3.map((item, index) => (
                  <ProgressBar
                    key={index}
                    bgcolor={item.bgcolor}
                    completed={item.completed}
                  />
                ))}
                <div className="comments">
                  <div
                    className="comment-items"
                    style={{ display: "flex", gap: "2rem" }}
                  >
                    <div
                      className="comment-each"
                      style={{ display: "flex", gap: "1rem" }}
                    >
                      <div
                        className="one"
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/images/today-1.png"
                          alt=""
                          style={{ height: "17px" }}
                        />
                        <h4>7</h4>
                      </div>
                      <div
                        className="one"
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/images/today-2.png"
                          alt=""
                          style={{ height: "13px", width: "16px" }}
                        />
                        <h4>2</h4>
                      </div>
                    </div>

                    <div className="image">
                      <img
                        className="img image1"
                        src="/images/image 8 (1).png"
                        alt=""
                      />
                      <img
                        className="img image2"
                        src="/images/image 8.png"
                        alt=""
                      />
                      <img
                        className="img image3"
                        src="/images/image 8.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items">
              <div
                className="hero-container"
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "12px",
                  display: "grid",
                  gap: "1rem",
                  width: "",
                }}
              >
                <div className="image">
                  <img src="/images/pic1.png" alt="" className="pic1" />
                </div>
                <article
                  className="text"
                  style={{ display: "grid", gap: ".6rem", paddingTop: ".6rem" }}
                >
                  <div
                    className="text-stuffs"
                   
                  >
                    
                    <h2>Highfidelity Design</h2>
                    <img
                      src="/images/3-dots.png"
                      alt=""
                   
                    />
                  </div>

                  <p>Make clear design and color</p>
                </article>

                <div
                  className="progress"
                  style={{ display: "grid", gap: "1rem" }}
                >
                  <div
                    className="loads"
                    style={{
                      display: "flex",
                      gap: "4rem",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                     <div className="proge">
                    <div
                      className="progres-loader"
                      style={{ display: "flex", gap: "1rem" }}
                    >
                      <img src="/images/today-3.png" alt="" />
                      <h3>Progress</h3>
                    </div>
                    <div className="ratings">
                      <h3>10/10</h3>
                    </div>
                  </div>
                    
                  </div>
                  <div className="loader">
                    {testData_3.map((item, index) => (
                      <ProgressBar
                        key={index}
                        bgcolor={item.bgcolor}
                        completed={item.completed}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="task-btn">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <img src="/images/plus.png" alt="" />
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProgressBar = ({ bgcolor, completed }) => {
  const containerStyles = {
    height: "8px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default Home;
