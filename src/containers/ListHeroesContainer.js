import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ListHeroesActions from '../actions/hero/ListHeroes'
import ListHeroes from '../pages/hero/list/ListHeroes'

export default connect(
    state => ({
        data: state.listHeroes.data,
        loading: state.listHeroes.loading
    }),
    dispatch => ({
        actions: bindActionCreators(ListHeroesActions, dispatch),
    }),
)(ListHeroes);
