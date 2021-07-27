import React from 'react';
const News = ({ match }) =>
    <h1> News sayfası : {match.params.id} </h1>
export default News;