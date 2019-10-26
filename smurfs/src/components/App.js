import React, { Component } from 'react';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <SmurfList />
      <SmurfForm />
    </div>
  );
};