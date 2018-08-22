import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Menu, Row, Col} from "antd";
import IndexMenu from "./indexMenu";
import IndexList from "./list";
class Index extends Component {
    render(){

        console.log(this.props)
        return (
            <Row className="wrap" >
                <Col md={6} xd={24}>
                    <IndexMenu
                    id="indexMenu"
                    
                    />
                </Col>
                <Col md={18} xd={24} className="indexList">
                     <IndexList/>
                </Col>
            </Row>
        )
    }
}




export default Index;