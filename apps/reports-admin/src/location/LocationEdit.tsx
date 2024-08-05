import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FloorTitle } from "../floor/FloorTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="floor.id" reference="Floor" label="Floor">
          <SelectInput optionText={FloorTitle} />
        </ReferenceInput>
        <TextInput label="roomNumber" source="roomNumber" />
      </SimpleForm>
    </Edit>
  );
};
