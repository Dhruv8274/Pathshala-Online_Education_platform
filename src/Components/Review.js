import React from 'react'
import './Review.css';
import Student1 from "../Assets/student1.png"
import Student2 from "../Assets/student2.png"
import Student3 from "../Assets/student3.png"
function Review() {
  return (
    <>
      <div className="reviewcontainer">
        <h2> Our Sucessfull Student </h2>
        <p className="description">"These are the students who use the PATHSHALA app to access notes, video lectures, and all the study material necessary to pursue their dream colleges after the 12th standard."</p>
        <div className="reviewSection">
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src={Student1} alt="loading"/>
                        <span>Aman Arya</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">My name is Aman Arya, and I am thrilled to share that I have achieved a remarkable score of 98% in my 12th board exams. I owe a great deal of gratitude to Pathshala, an exceptional online learning platform, for providing me with comprehensive study materials that helped me cover all the topics effectively. I am truly grateful to Pathshala for their invaluable support and excellent study resources.</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

        {/* <!-- Clients Review-2 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src={Student2} alt="loading"/>
                        <span>Vivek Thakur</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">My name is Vivek Thakur, and I am delighted to announce that I have secured an outstanding score of 94% in my 12th board examinations. I am immensely grateful to Pathshala, a phenomenal online learning platform, for providing me with exceptional study materials that covered all the topics comprehensively. I extend my heartfelt appreciation to Pathshala for their invaluable support and top-notch study resources, which played a pivotal role in my academic success</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

        {/* <!-- Clients Review-3 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src={Student3}alt="loading"/>
                        <span>Vinod Singh</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">With immense joy, I, Vinod Singh, proudly share my remarkable achievement of scoring an impressive 96% in my 10th board exams. I am indebted to Pathshala, an incredible online learning platform, for offering comprehensive study materials that proved invaluable in covering all the subjects. My heartfelt gratitude goes to Pathshala for their exceptional study resources, which played a crucial role in my academic journey and paved the way for my outstanding results.</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>
        </div>
    </div>
    </>
  )
}

export default Review
