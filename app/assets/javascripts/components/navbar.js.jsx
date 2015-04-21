var Navbar = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  // navbar 
  render: function() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="row">

            <div className="navbar-header">
              <a className="navbar-brand" href="#">VN</a>
            </div>

            // if logged in

            


            // if logged out

            <div className="col-md-11 text-right">
              <h4>Hello, Amy</h4>
            </div>

          </div>
        </div>
      </nav>
    );
  }
});