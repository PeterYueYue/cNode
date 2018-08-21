import React,{Component} from "react";
import Nav from "./nav";
import {Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button} from 'antd';

export default class MainHeader extends Component {
    render(){
        return (<Layout.Header>
            <Row className="wrap" >
                <Col md={6}  xs={24} >
                    <h1 id="logo">cNode</h1>
                </Col>
                <Col md={18} xs={0} >
                    <Divider type="vertical" className="headerDivder"  />
                    <Nav id="nav" mode="horizontal"/>
                </Col>
                <Col md={0}  xs={24} className="xsNav" >
                    <Dropdown  
                        overlay={<Nav    id="xs" mode="vertical"/>}
                        trigger={["click", "touchend"]}
                        placement = "bottomRight"
                    >
                        <Button><Icon type="bars"/></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>)
    }
}

