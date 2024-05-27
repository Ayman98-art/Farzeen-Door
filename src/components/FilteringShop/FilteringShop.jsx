import ProCategories from "../ProCategories/ProCategories";
import ProTags from "../ProTags/ProTags";
import RangeFilter from "../RangeFilter/RangeFilter";
import './FilteringShop.css';

function FilteringShop() {
return (
<div className="goupfilter">

<div className="FilteringShop">
    <ProCategories />.
</div>

<div className="FilteringShop p-3">
    <RangeFilter />.
</div>

<div className="FilteringShop">
    <ProTags />.
</div>

</div>
)
}

export default FilteringShop;