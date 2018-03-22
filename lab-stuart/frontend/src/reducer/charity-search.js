export default (state=null, {type, payload}) => {
  switch(type){
  case 'SEARCH_QUERY_SENT':
    return payload;
  default:
    return state;
  }
};
