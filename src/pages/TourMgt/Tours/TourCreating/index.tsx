import React, { useEffect, useState } from 'react';
import './index.scss';
import { ArrowLeftOutlined, PlusOutlined, SaveOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Table,
  Space,
  Row,
  Col,
  Image,
  Select,
  DatePicker,
  Upload,
  UploadFile
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CKEditor } from '@ckeditor/ckeditor5-react/';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextArea from 'antd/es/input/TextArea';
import Modal from 'antd/es/modal/Modal';
import { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { UploadChangeParam } from 'antd/es/upload';

interface StartDateItem {
  no: number;
  description: string;
  startDate: string;
  adultPrice: number;
  under2Price: number,
  to5Price: number,
  to10Price: number
  seatBooked: string,
  status: string
}

interface Tour {
  name: string;
  slot: number;
  locationId: number,
  startDates: StartDateItem[],
  description: string,
  schedule: string,
  adultPrice: number;
  under2Price: number,
  to5Price: number,
  to10Price: number
  thumbnailImage: string,
  contentImmage: string
}
//---data from api----
const travelCategories = [
  { name: "Du lịch trong nước", id: 1 },
  { name: "Du lịch nước ngoài", id: 2 }
]
const travelRegions = [
  {
    categoryId: 1,
    regions: [
      { name: "Miền Bắc", id: 1 },
      { name: "Miền Trung", id: 2 },
      { name: "Miền Nam", id: 3 }
    ]
  },
  {
    categoryId: 2,
    regions: [
      { name: "Châu Á", id: 4 },
      { name: "Châu Âu", id: 5 }
    ]
  }
]
const travelLocations = [
  {
    regionId: 1,
    locations: [
      { name: "Hà Nội", id: 1 },
      { name: "Spa", id: 2 },
      { name: "Hạ Long", id: 3 }
    ]
  },
  {
    regionId: 4,
    locations: [
      { name: "Hàn Quốc", id: 4 },
      { name: "Nhật Bản", id: 5 }
    ]
  }
]

//-------------
const categoryOptions = {
  categories: travelCategories.map(e => {
    return {
      value: e.id,
      label: e.name
    }
  }),
  selected: {}
}

categoryOptions.selected = categoryOptions.categories[0];

const regionOptions = travelRegions.map((e) => {
  let res = {
    categoryId: e.categoryId,
    regions: e.regions.map(r => {
      return {
        value: r.id,
        label: r.name
      }
    }),
    selected: {}
  }
  res.selected = res.regions[0];
  return res;
})

const locationOptions = travelLocations.map((e) => {
  let res = {
    regionId: e.regionId,
    locations: e.locations.map(r => {
      return {
        value: r.id,
        label: r.name
      }
    }),
    selected: {}
  }
  res.selected = res.locations[0];
  return res;
})

const TourCreating = (props: any) => {
  const [currentCategoryData, setCurrentCategoryData] = useState(categoryOptions.categories[0]);

  const [currentRegionData, setCurrentRegionData] = useState({
    categoryId: regionOptions[0].categoryId,
    regions: regionOptions[0].regions,
    selectedRegion: regionOptions[0].regions[0]
  })

  const [currentLocationData, setCurrentLocationData] = useState({
    regionId: locationOptions[0].regionId,
    locations: locationOptions[0].locations,
    selectedLocation: locationOptions[0].locations[0]
  })

  const travelCategorySelect = (value: any) => {
    let category = categoryOptions.categories.find(x => x.value === value);
    category && setCurrentCategoryData(category);

    let region = regionOptions.find(x => x.categoryId === value);
    setCurrentRegionData({
      categoryId: region?.categoryId || 0,
      regions: region?.regions || [],
      selectedRegion: region?.regions[0] || { label: '', value: 0 }
    })

    let location = region && locationOptions.find(x => x.regionId === region?.regions[0].value);
    setCurrentLocationData({
      regionId: location?.regionId || 0,
      locations: location?.locations || [],
      selectedLocation: location?.locations[0] || { label: '', value: 0 }
    })
  }

  const travelRegionSelect = (value: any) => {
    const region = currentRegionData.regions.find(x => x.value === value);
    region && setCurrentRegionData({
      categoryId: currentRegionData.categoryId,
      regions: currentRegionData.regions,
      selectedRegion: region
    })
    const location = locationOptions.find(x => x.regionId === value);
    setCurrentLocationData({
      regionId: location?.regionId || 0,
      locations: location?.locations || [],
      selectedLocation: location?.locations[0] || { label: '', value: 0 }
    })
  }

  const travelLocationSelect = (value: any) => {
    const location = currentLocationData.locations.find(x => x.value === value);
    setCurrentLocationData({
      regionId: currentLocationData.regionId,
      locations: currentLocationData.locations,
      selectedLocation: location || { label: '', value: 0 }
    })
    setTour({ ...tour, locationId: location?.value || 0 })
  }

  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
    setComponentDisabled(disabled);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const columns: ColumnsType<StartDateItem> = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Start date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Seat Booked',
      key: 'seatBooked',
      dataIndex: 'seatBooked',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => { props.onSelectTour(record); }} >View</a>
        </Space>
      ),
    },
  ];

  const [startDateAdded, setStartDateAdded] = useState<StartDateItem>({
    no: 0,
    description: '',
    startDate: '',
    adultPrice: 0,
    under2Price: 0,
    to5Price: 0,
    to10Price: 0,
    seatBooked: '',
    status: ''
  })

  const onStartDateSelect: DatePickerProps['onChange'] = (date, dateString) => {
    setStartDateAdded({ ...startDateAdded, startDate: dateString })
  };

  const [tour, setTour] = useState<Tour>({
    slot: 0,
    name: '',
    locationId: currentLocationData.selectedLocation.value || 0,
    startDates: [],
    description: '',
    schedule: '',
    contentImmage: '',
    thumbnailImage: '',
    adultPrice: 0,
    to10Price: 0,
    to5Price: 0,
    under2Price: 0
  })

  useEffect(() => {
    console.log(tour);
  }, [tour])

  const [open, setOpen] = useState(false);

  const onStartDateAdd = () => {
    setOpen(false);
    let existedStartDate = tour.startDates.find(x => x.startDate === startDateAdded.startDate);
    let startDates = tour.startDates;

    if (existedStartDate != null) {
      startDates[tour.startDates.indexOf(existedStartDate)] = startDateAdded;
    }
    else {
      startDates.push(startDateAdded);
    }
    setTour({ ...tour, startDates: startDates })
  }

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  const [thumbnailImages, setThumbnailImages] = useState<UploadFile[]>([])

  const [contentImages, setContentImages] = useState<UploadFile[]>([])

  const getBase64 = (file: any, cb: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const onThumnailUpload = (e: UploadChangeParam<UploadFile<any>>) => {
    setThumbnailImages([e.file])
    var res = '';
    getBase64(e.file, (result: any) => {
      setTour({ ...tour, thumbnailImage: result })
    });

  }

  const onContentUpload = (e: UploadChangeParam<UploadFile<any>>) => {
    setContentImages([e.file])
    var res = '';
    getBase64(e.file, (result: any) => {
      setTour({ ...tour, contentImmage: result })
    });

  }
  return (
    <>
      <ArrowLeftOutlined style={{ display: 'flex', fontSize: 20, cursor: 'pointer', width: '20px' }} onClick={props.onBackTourList} />
      <h2>Tour Creating</h2>
      <Form
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 18 }}
        layout="vertical"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Row>
          <Col offset={4} span={8}>
            <Form.Item label="Name">
              <TextArea rows={5}
                value={tour.name}
                onChange={(e) => { setTour({ ...tour, name: e.target.value }) }} />
            </Form.Item>
            <Form.Item label="Slot">
              <Input onChange={(e) => { setTour({ ...tour, slot: parseInt(e.target.value) }) }}  />
            </Form.Item>
            <Form.Item label="Category">
              <Select
                showSearch
                placeholder="Select a category"
                optionFilterProp="children"
                onChange={travelCategorySelect}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={categoryOptions.categories}
                defaultValue={currentCategoryData}
                value={currentCategoryData}
              />
            </Form.Item>
            <Form.Item label="Region">
              <Select
                showSearch
                placeholder="Select a region"
                optionFilterProp="children"
                onChange={travelRegionSelect}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={currentRegionData.regions}
                defaultValue={currentRegionData.selectedRegion}
                value={currentRegionData.selectedRegion}
              />
            </Form.Item>
            <Form.Item label="Location">
              <Select
                showSearch
                placeholder="Select a location"
                optionFilterProp="children"
                onChange={travelLocationSelect}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={currentLocationData.locations}
                defaultValue={currentLocationData.selectedLocation}
                value={currentLocationData.selectedLocation}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Adult price">
              <Input onChange={(e) => { setTour({ ...tour, adultPrice: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Children under 2 price">
              <Input onChange={(e) => { setTour({ ...tour, under2Price: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Children from 2 to 5 price">
              <Input onChange={(e) => { setTour({ ...tour, to5Price: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Children from 5 to 10 price">
              <Input onChange={(e) => { setTour({ ...tour, to10Price: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Thumbnail image">
              <Upload
                listType="picture"
                beforeUpload={() => false}
                onChange={(e) => { onThumnailUpload(e); }}
                multiple={false}
                fileList={thumbnailImages}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Content image">
              <Upload
                listType="picture"
                beforeUpload={() => false}
                onChange={(e) => { onContentUpload(e); }}
                multiple={false}
                fileList={contentImages}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col offset={4} span={16}>
            <Form.Item wrapperCol={{ span: 24 }} label="Start date">
              <Table columns={columns} dataSource={[...tour.startDates]} pagination={false} />
              <Button
                type='primary'
                size='small'
                icon={<PlusOutlined />}
                style={{ float: 'right', marginTop: '20px' }}
                onClick={() => setOpen(true)} >Add start date</Button>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }} label="Description">
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor: any) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event: any, editor: { getData: () => any; }) => {
                  const data = editor.getData();
                  setTour({ ...tour, description: data })
                }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }} label="Schedule">
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor: any) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event: any, editor: { getData: () => any; }) => {
                  const data = editor.getData();
                  setTour({ ...tour, schedule: data })
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button className='btn-save-tour' type='primary' size='large' icon={<SaveOutlined />} onClick={props.onGoToEditing} >Save</Button>
      </Form>

      <Modal
        title="Add start date"
        centered
        open={open}
        onOk={() => onStartDateAdd()}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Col offset={6} span={12}>
          <Form layout="vertical">
            <Form.Item label="Start date">
              <DatePicker disabledDate={disabledDate} onChange={onStartDateSelect} />
            </Form.Item>
            <Form.Item label="Adult price">
              <Input onChange={(e) => { setStartDateAdded({ ...startDateAdded, adultPrice: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Children under 2 price">
              <Input onChange={(e) => { setStartDateAdded({ ...startDateAdded, under2Price: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Children from 2 to 5 price">
              <Input onChange={(e) => { setStartDateAdded({ ...startDateAdded, to5Price: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Children from 5 to 10 price">
              <Input onChange={(e) => { setStartDateAdded({ ...startDateAdded, to10Price: parseFloat(e.target.value) }) }} />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea onChange={(e) => { setStartDateAdded({ ...startDateAdded, description: e.target.value }) }} />
            </Form.Item>
          </Form>
        </Col>
      </Modal>
    </>
  );
};

export default TourCreating;
