import React from 'react';
import Create from "../../../layout/create/Create";
import { LexiconImportForm, fetchWikidata } from "@semapps/interop-components";

const ThemeCreate = (props) => (
  <Create redirect="edit" {...props}>
    <LexiconImportForm
      fetchLexicon={fetchWikidata()}
      selectData={data => ({
        'pair:label': data.label,
        'pair:description': data.summary,
        'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
      })}
    />
  </Create>
);

export default ThemeCreate;
