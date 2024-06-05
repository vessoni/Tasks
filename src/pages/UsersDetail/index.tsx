import MaterialTable from '@material-table/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PurpleButton, PurpleTextField } from '../../components/forms/styles';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';

interface Hair {
  color: string;
  type: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

export const UsersDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isPending } = useFetch<User>(`users/${id}`);

  if (isPending || !data) {
    return <Loading />;
  }

  const renderDetail = (label: string, value: string | number) => (
    <Grid item xs={12} sm={6}>
      <Typography variant="body1">
        <Typography
          variant="subtitle2"
          component="span"
          color="textSecondary"
          style={{ marginRight: '0.5rem' }}
        >
          {label}:
        </Typography>
        {value}
      </Typography>
    </Grid>
  );

  return (
    <Box mt={4} mb={4}>
      <Card>
        <CardHeader title={<h1>{data.firstName + ' ' + data.lastName}</h1>} />
        <Divider />
        <CardContent>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Personal Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {renderDetail('First Name', data.firstName)}
                {renderDetail('Last Name', data.lastName)}
                {renderDetail('Maiden Name', data.maidenName)}
                {renderDetail('Age', data.age)}
                {renderDetail('Gender', data.gender)}
                {renderDetail('Email', data.email)}
                {renderDetail('Phone', data.phone)}
                {renderDetail('Username', data.username)}
                {renderDetail('Password', data.password)}
                {renderDetail('Birth Date', data.birthDate)}
                {renderDetail('Blood Group', data.bloodGroup)}
                {renderDetail('Height', data.height)}
                {renderDetail('Weight', data.weight)}
                {renderDetail('Eye Color', data.eyeColor)}
                {renderDetail('Hair', `${data.hair.color}, ${data.hair.type}`)}
                {renderDetail('IP', data.ip)}
                {renderDetail('MAC Address', data.macAddress)}
                {renderDetail('University', data.university)}
                {renderDetail('Role', data.role)}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {renderDetail('Address', data.address.address)}
                {renderDetail('City', data.address.city)}
                {renderDetail('State', data.address.state)}
                {renderDetail('State Code', data.address.stateCode)}
                {renderDetail('Postal Code', data.address.postalCode)}
                {renderDetail(
                  'Coordinates',
                  `${data.address.coordinates.lat}, ${data.address.coordinates.lng}`,
                )}
                {renderDetail('Country', data.address.country)}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Company Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {renderDetail('Department', data.company.department)}
                {renderDetail('Company Name', data.company.name)}
                {renderDetail('Title', data.company.title)}
                {renderDetail('Company Address', data.company.address.address)}
                {renderDetail('City', data.company.address.city)}
                {renderDetail('State', data.company.address.state)}
                {renderDetail('State Code', data.company.address.stateCode)}
                {renderDetail('Postal Code', data.company.address.postalCode)}
                {renderDetail(
                  'Coordinates',
                  `${data.company.address.coordinates.lat}, ${data.company.address.coordinates.lng}`,
                )}
                {renderDetail('Country', data.company.address.country)}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Bank Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {renderDetail('Card Expiry', data.bank.cardExpire)}
                {renderDetail('Card Number', data.bank.cardNumber)}
                {renderDetail('Card Type', data.bank.cardType)}
                {renderDetail('Currency', data.bank.currency)}
                {renderDetail('IBAN', data.bank.iban)}
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Crypto Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {renderDetail('Coin', data.crypto.coin)}
                {renderDetail('Wallet', data.crypto.wallet)}
                {renderDetail('Network', data.crypto.network)}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <Divider />
      </Card>
    </Box>
  );
};
