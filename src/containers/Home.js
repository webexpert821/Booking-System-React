import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from './../img/hotels/hotel-142-shanghai-puli-hotel-spa-01.jpg';

const Overlay = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
  ), url(${Background});
  background-size: cover;
  background-position: center;
  height: 500px;

  @media (min-width: 768px) {
    height: 660px;
  }
`;

const Lead = styled.p`
  font-size: 1.15rem;
  max-width: 550px;

  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

const HeadVariable = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

// Using a ES6 class component as it contains state.
class Home extends Component {
  render() {
    return (
      <div>
        <Alert
          size="alert-small"
          color="alert-black"
          className="text-center"
          style={{
            marginBottom: 0
          }}
          >
          Coming soon! Exclusive member rewards.
        </Alert>

        <Navbar colorScheme="navbar-light"/>
        <div className="container-fluid pl-0 pr-0 hero">
          <div className="row no-gutters">
            <Overlay className="col d-flex align-items-center justify-content-center text-white p-4">
              <div className="container">
                <div className="display-4 text-center"
                  style={{
                    fontFamily: 'Judson, serif',
                    fontWeight: '500'
                  }}>
                  <HeadVariable>Join the club!<br /></HeadVariable>
                  Access the world's best hotels direct.
                    <HeadVariable> Pay no booking fees</HeadVariable>.
                </div>
                <Lead className="lead font-weight-normal text-center mx-auto mb-4">
                  We use the blockchain to provide clear and open pricing. Saving hotels and you money.
                </Lead>
                <div className="text-center">
                  <a
                    className="btn btn-lg btn-primary mb-3"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '.03em',
                      textTransform: 'uppercase',
                      padding: '16px 56px',
                      borderRadius: '6px'
                    }}
                    href="mailto:join@papriika.com?subject=Join the club. Become an early member and receive 50% off! ??? Papriika.com" 
                    role="button">
                    Join the club!
                  </a>
                  <p className="small">Become an early member today and save!</p>
                </div>
              </div>
            </Overlay>
          </div>
        </div>
        <a 
          href="mailto:inquiries@papriika.com?subject=Early membership inquiry 50% off ??? Papriika.com" 
          alt="Early Papriika membership inquiry 50% off"
          >
          <Alert
            color="alert-primary"
            className="text-center"
            style={{
              marginBottom: 0
            }}
            >
            Early members receive <span style={{fontWeight: '900'}}>50% off</span> membership!
          </Alert>
        </a>
        <Alert
          color="alert-black"
          className="text-center"
          style={{
            marginBottom: 0,
            textTransform: 'none'
          }}
          >
          We use the blockchain as a source of truth, guaranteeing <span style={{fontWeight: '900'}}>Travellers</span> and <span style={{fontWeight: '900'}}>H??teliers</span> the best rates.
        </Alert>
        <Footer 
          className="mx-auto text-center p-4 mt-9"
          style={{
            backgroundColor: '#000'
          }}
          />
      </div>

    );
  }
}

export default Home;
