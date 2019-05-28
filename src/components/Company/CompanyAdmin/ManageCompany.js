import React from "react";

import {
  Table,
  Divider,
  Popconfirm,
  Icon,
  Button,
  Drawer,
  Select,
  Form,
  Input,
  DatePicker,
  Col,
  Row
} from "antd";

const { Option } = Select;
class CompanyMain extends React.Component {
  state = {
    loading: false,
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const dataSource = [
      {
        key: "id",
        id: "C678",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        period: "1Year",
        admin: "Mathan"
      },
      {
        key: "id",
        id: "C452",
        name: "Invicta Inovations",
        abbreviation: "Invicta",
        period: "1Year",
        admin: "Theepan"
      },

      {
        key: "id",
        id: "C124",
        name: "Sysco Labs",
        abbreviation: "Sysco",
        period: "1Year",
        admin: "Hari"
      },

      {
        key: "id",
        id: "C777",
        name: "Mithra inovations",
        abbreviation: "mithra",
        period: "2Year",
        admin: "Tyron"
      }
    ];
    const columns = [
      {
        title: "Company ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Company Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Abbreviation",
        dataIndex: "abbreviation",
        key: "abbreviation"
      },
      {
        title: "Lisence period",
        dataIndex: "period",
        key: "period"
      },

      {
        title: "Company Admin",
        dataIndex: "admin",
        key: "admin"
      },
      {
        title: "Action",
        key: "action",

        render: () => (
          <span>
            <a onClick={this.showDrawer} style={{ color: "blue" }}>
              <Icon type="edit" className="datatable-icon" />
              &nbsp;View
            </a>
            &nbsp; &nbsp;
            <Popconfirm
              title="Are you sure, do you want delete this Company?"
              icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <Divider type="vertical" />
              <a href="hello" style={{ color: "red" }}>
                <Icon type="delete" className="datatable-icon" />
                &nbsp; Delete
              </a>
            </Popconfirm>
            <Divider type="vertical" />
            &nbsp; &nbsp;
            <a href="hello" style={{ color: "green" }}>
              <Icon type="fullscreen" className="datatable-icon" />
              &nbsp; View
            </a>
          </span>
        )
      }
    ];

    return (
      <React.Fragment>
        <div style={{ padding: 4, background: "#fff", minHeight: 360 }}>
          <Button type="primary" onClick={this.showDrawer}>
            <Icon type="plus" />
            Add Company
          </Button>
          <br />
          <br />
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <div>
          <Drawer
            title="CREATE NEW COMPANY"
            width={720}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Company ID">
                    <Input
                      value="#COM101"
                      id="companyId"
                      disabled
                      style={{
                        border: "1px solid #719ECE"
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Company Name">
                    <Input
                      placeholder="Please Enter Company Name"
                      id="companyName"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Abberivation">
                    <Input
                      placeholder="Abberivation"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Email_ID">
                    <Input
                      placeholder="Email ID"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Liscence Period">
                    <Input
                      value="3 Years"
                      id="lisencePeriod"
                      style={{
                        border: "1px solid #719ECE"
                      }}
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Company URL">
                    <Input
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="URL"
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "3px"
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Company Admin">
                    <Input
                      placeholder="Please Enter Company Admin"
                      id="companyAdmin"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Lisence Package">
                    <Select
                      placeholder="Please choose the Package"
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "4px"
                      }}
                    >
                      <Option value="bronze">Bronze</Option>
                      <Option value="silver">Silver</Option>
                      <Option value="gold">Gold</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Liscence Period">
                    <DatePicker.RangePicker
                      getPopupContainer={trigger => trigger.parentNode}
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "4px"
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e9e9e9",
                padding: "10px 16px",
                background: "#fff",
                textAlign: "right"
              }}
            >
              <Button
                type="danger"
                icon="close"
                onClick={this.onClose}
                style={{ marginRight: 8, background: "#cc104b", color: "#FFF" }}
              >
                Cancel
              </Button>
              <Button icon="plus" onClick={this.onClose} type="primary">
                Add
              </Button>
            </div>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyMain;
