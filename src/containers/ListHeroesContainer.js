import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ListHeroesActions from '../actions/ListHeroes'
import ListHeroes from '../pages/list-heroes'

export default connect(
    state => ({
        data: state.listHeroes.data,
        loading: state.listHeroes.loading
    }),
    dispatch => ({
        actions: bindActionCreators(ListHeroesActions, dispatch),
    }),
)(ListHeroes);
