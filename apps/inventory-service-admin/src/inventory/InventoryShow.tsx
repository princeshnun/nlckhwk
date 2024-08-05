import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const InventoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Item" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
