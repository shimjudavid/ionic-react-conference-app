import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';
import { IonIcon, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonSlides, IonSlide } from '../ionic';
import { withRouter } from 'react-router-dom';

type Props = {
  sawTutorial: () => any
}

type State = {
  showSkip: boolean
}

class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showSkip: false
    }
  }

  onSlideChangeStart() {
    this.setState((state, props) => (
      {
        ...state,
        showSkip: !state.showSkip
      }
    ));
  }

  endTutorial() {
    this.props.sawTutorial();
    this.props.history.push('/');
  }

  render() {
    return (
      <IonPage className="page-tutorial">
        <IonHeader no-border>
          <IonToolbar>
            { this.state.showSkip ?
              <IonButtons slot="end">
                <IonButton onClick={this.endTutorial} color="primary">Skip</IonButton>
              </IonButtons>
            : null}
          </IonToolbar>
        </IonHeader>
        <IonContent no-bounce>
          <IonSlides onIonSlideWillChange={this.onSlideChangeStart} pager>

            <IonSlide>
              <img alt="welcome" src="/assets/img/ica-slidebox-img-1.png" className="slide-image"/>
              <h2 className="slide-title">
                Welcome to <b>ICA</b>
              </h2>
              <p>
                The <b>ionic conference app</b> is a practical preview of the ionic framework in
                action, and a demonstration of proper code use.
              </p>
            </IonSlide>

            <IonSlide>
              <img alt="what" src="/assets/img/ica-slidebox-img-2.png" className="slide-image"/>
              <h2 className="slide-title">
                What is Ionic?
              </h2>
              <p>
                <b>Ionic Framework</b> is an open source SDK that enables developers to build
                high quality mobile apps with web technologies like HTML, CSS, and JavaScript.
              </p>
            </IonSlide>

            <IonSlide>
              <img alt="what" src="/assets/img/ica-slidebox-img-3.png" className="slide-image"/>
              <h2 className="slide-title">
                What is Ionic Platform?
              </h2>
              <p>The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic
              apps with integrated services like push notifications, native builds,
              user auth, and live updating.</p>
            </IonSlide>

            <IonSlide>
              <img alt="ready" src="/assets/img/ica-slidebox-img-4.png" className="slide-image"/>
              <h2 className="slide-title">
                Ready to Play?
              </h2>
              <IonButton icon-end onClick={this.endTutorial}>
                Continue
                <IonIcon name="arrow-forward"></IonIcon>
              </IonButton>
            </IonSlide>

          </IonSlides>
        </IonContent>
      </IonPage>
    );
  }
};

export default connect(null, {
  sawTutorial: () => actions.user.sawTutorial(),
})(withRouter(Tutorial));
