const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Discover</span>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Admissions</a>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">Events</a>
      </div>
      <div>
        <span className="footer-title">Explore</span>
        <a className="link link-hover">Research</a>
        <a className="link link-hover">Facilities</a>
        <a className="link link-hover">Sports</a>
        <a className="link link-hover">Alumni</a>
      </div>
      <div>
        <span className="footer-title">Connect</span>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Social Media</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
