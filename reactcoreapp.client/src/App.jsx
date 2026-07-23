import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import {
    ColumnDirective, ColumnsDirective, GridComponent, 
    Page, Inject, Filter, Toolbar, Search, Sort,  Edit,Resize, Reorder
} from '@syncfusion/ej2-react-grids';
import './App.css';

function App() {
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    const orderIDRules = { required: true };
    const customerIDRules = { required: true, minLength: 3 };

    // Configure DataManager with UrlAdaptor.
    const data = new DataManager({
         url: "http://localhost:5107/Grid",
        insertUrl: "http://localhost:5107/Grid/Insert",
        removeUrl: "http://localhost:5107/Grid/Remove",
        updateUrl: "http://localhost:5107/Grid/Update",
        adaptor: new UrlAdaptor()                // Specify UrlAdaptor for custom REST API.
    });

   
    // Verified badge template
    const verifiedTemplate = (props) => {
        return <span className={props.Verified ? 'verified-badge verified' : 'verified-badge not-verified'}>
            {props.Verified ? '✓ Verified' : '✗ Not Verified'}
        </span>;
    };

    // Currency formatting template
    const currencyTemplate = (props, field) => {
        return <span className="currency-value">${props[field]?.toFixed(2)}</span>;
    };

    const filterSettings = { type:'Excel'}

    return (
        <div className="">
            <div className="dashboard-header">
                <div className="header-content">
                    <h2>📊 Enterprise Order Management Dashboard</h2>
                    <p className="subtitle">Real-time Order Tracking & Analytics</p>
                </div>
            </div>
            <div >
                <GridComponent 
                    id='grid'
                    dataSource={data} 
                    height={400} 
                    width={'auto'}
                    allowPaging={true} 
                    allowFiltering={true} 
                    toolbar={toolbar} 
                    filterSettings={filterSettings}
                    allowSorting={true}
                    editSettings={editSettings}
                    allowResizing={true}
                    allowReordering={true}
                >
                    <ColumnsDirective>
                        <ColumnDirective
                            field='OrderID'
                            headerText='Order ID'
                            isPrimaryKey={true}
                            width='100'
                            textAlign='Right'
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='CustomerName'
                            headerText='Customer Name'
                            width='170'
                            textAlign='Left'
                            validationRules={customerIDRules}
                        />
                        <ColumnDirective
                            field='EmployeeName'
                            headerText='Employee'
                            width='160'
                            textAlign='Left'
                        />
                        <ColumnDirective
                            field='ShipCity'
                            headerText='Ship City'
                            editType='dropdownedit'
                            width='120'
                            textAlign='Left'
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='ShipCountry'
                            headerText='Country'
                            width='120'
                            editType='dropdownedit'
                            textAlign='Left'
                        />
                         <ColumnDirective
                            field='OrderDate'
                            headerText='Order Date'
                            format='yMd'
                            width='130'
                            editType='datepickeredit'
                            textAlign='Right'
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='OrderAmount'
                            headerText='Order Amount'
                            template={(props) => currencyTemplate(props, 'OrderAmount')}
                            format='C2'
                            width='150'
                            editType='numericedit'
                            textAlign='Right'
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='Freight'
                            headerText='Freight'
                            template={(props) => currencyTemplate(props, 'Freight')}
                            format='C2'
                            editType='numericedit'
                            width='110'
                            textAlign='Right'
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='Status'
                            headerText='Status'
                            width='140'
                            editType='dropdownedit'
                            textAlign='Center'
                            allowFiltering={true}
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='Verified'
                            headerText='Verification'
                            editType='dropdownedit'
                            template={verifiedTemplate}
                            width='140'
                            textAlign='Center'
                            validationRules={orderIDRules}
                        />
                        <ColumnDirective
                            field='ShippedDate'
                            headerText='Shipped Date'
                            format='yMd'
                            editType='datepickeredit'
                            width='130'
                            textAlign='Right'
                            validationRules={orderIDRules}
                        />
                    </ColumnsDirective>
                    
                    <Inject services={[Page, Filter, Toolbar, Search, Sort, Edit, Resize, Reorder]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default App;