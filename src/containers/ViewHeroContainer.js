import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as HeroActions from '../actions/hero/ViewHero'
import ViewHero from '../pages/hero/view/ViewHero'

export default connect(
    state => ({
        hero: state.viewHero.hero,
        loading: state.listHeroes.loading
    }),
    dispatch => ({
        actions: bindActionCreators(HeroActions, dispatch),
    }),
)(ViewHero);
