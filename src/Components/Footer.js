import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="additional-content">
          <h4>PathShala-The Best Learning Platform</h4>
          <p>
            Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today..
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook">Facebook</i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter">Twitter</i>
          </a>
          <a
            href="https://www.linkden.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter">Linkden</i>
          </a>
        </div>

        <div className="important-links">
          <a href="/terms">Terms of Service |</a>
          <a href="/privacy">Privacy Policy |</a>
          <a href="/contact">Contact Us</a>
        </div>
        <p>&copy; 2023 Pathshala. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
