import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as HeroActions from '../actions/ViewHero'
import ViewHero from '../pages/view-hero'

export default connect(
    state => ({
        hero: state.viewHero.hero,
        loading: state.listHeroes.loading
    }),
    dispatch => ({
        actions: bindActionCreators(HeroActions, dispatch),
    }),
)(ViewHero);
