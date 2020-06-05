import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as HeroActions from '../actions/HeroActions'
import ListHeroes from '../pages/hero/list/ListHeroes'

export default connect(
    state => ({
        heroes: state.hero.heroes,
        loading: state.hero.loading
    }),
    dispatch => ({
        actions: bindActionCreators(HeroActions, dispatch),
    }),
)(ListHeroes);
