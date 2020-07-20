import React, { useState } from "react";
import { useSubscription, useMutation, gql } from "@apollo/client";
import { List, ListItem } from "./shared/List";
import InputForm from "./shared/InputForm";

const GROCERY = gql`
  subscription Grocery($id: String!) {
    grocery_by_pk(id: $id) {
      id
      name
      address
      finrevs(order_by: { created_at: desc }) {
        grid
        body
        created_at
      }
    }
  }
`;

const ADD_REVIEW = gql`
  mutation($body: String!, $grid: String!) {
    AddRev(body: $body, grid: $grid) {
      affected_rows
    }
  }
`;

const Mutation = ({
  match: {
    params: { id },
  },
}) => {
  const [inputVal, setInputVal] = useState("");
  const { loading, error, data } = useSubscription(GROCERY, {
    variables: { id },
  });
  const [addReview] = useMutation(ADD_REVIEW);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  const { name, address, finrevs } = data.grocery_by_pk;

  return (
    <div>
      <h3>
        {name} <Badge>{address}</Badge>
      </h3>
      <InputForm
        inputVal={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onSubmit={() => {
          addReview({ variables: { id, body: inputVal } })
            .then(() => setInputVal(""))
            .catch((e) => {
              setInputVal(e.message);
            });
        }}
        buttonText="Submit"
      />
      <List>
        {finrevs.map((finrev) => (
          <ListItem key={finrev.id}>{finrev.body}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Mutation;