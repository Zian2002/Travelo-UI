import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Đăng ký để được nhận các thông tin ưu đãi một cách sớm nhất
        </p>
        <p className="footer-subscription-text">
          Bạn có thể hủy đăng ký nhận thông báo bất cứ lúc nào
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Email của bạn ..."
            />
            <Button buttonStyle="btn--outline">Đăng ký</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Về chúng tôi</h2>
            <Link to="/">Giấy phép</Link>
            <Link to="/">Sự nghiệp</Link>
            <Link to="/">Doanh nghiệp đầu tư</Link>
            <Link to="/">Điều khoản dịch vụ</Link>
          </div>
          <div className="footer-link-items">
            <h2>Liên hệ</h2>
            <Link to="/">Thông tin</Link>
            <Link to="/">Hổ trợ</Link>
            <Link to="/">Điểm đến</Link>
            <Link to="/">Tour du lịch</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRAVELO <i className="fab fa-gripfire"></i>
            </Link>
          </div>
          <small className="website-rights">TRAVELO © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
