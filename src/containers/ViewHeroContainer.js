import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as HeroActions from '../actions/HeroActions'
import ViewHero from '../pages/hero/view/ViewHero'

export default connect(
    state => ({
        hero: state.hero.hero,
        loading: state.hero.loading
    }),
    dispatch => ({
        actions: bindActionCreators(HeroActions, dispatch),
    }),
)(ViewHero);
