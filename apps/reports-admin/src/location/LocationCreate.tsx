import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FloorTitle } from "../floor/FloorTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="floor.id" reference="Floor" label="Floor">
          <SelectInput optionText={FloorTitle} />
        </ReferenceInput>
        <TextInput label="roomNumber" source="roomNumber" />
      </SimpleForm>
    </Create>
  );
};
