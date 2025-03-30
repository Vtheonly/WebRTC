# WebRTC Podcast App  

## Overview  

This is a **WebRTC-based podcast application** built with **React** and **Firebase**. The app allows users to **host and join live podcasts** using WebRTC technology. Authentication is managed through **Firebase OAuth (Google Sign-In)**, and podcast sessions are facilitated via **SDP (Session Description Protocol) exchange**.  

## Features  

- **User Authentication:** Login and sign-up using **Google OAuth** via Firebase Authentication.  
- **WebRTC Support:** Real-time **audio/video streaming** using WebRTC.  
- **Secure Podcast Joining:** Users join sessions using a **6-digit code** generated upon podcast creation.  
- **Firestore Database:** Stores session metadata, SDP information, and user details.  
- **React Frontend:** A responsive user interface built with **React.js**.  

## Tech Stack  

- **Frontend:** React.js  
- **Backend:** Firestore Database for signaling (alternative to Firebase Cloud Functions)  
- **Database:** Firebase Firestore  
- **Authentication:** Firebase OAuth (Google Sign-In)  
- **Real-time Communication:** WebRTC  

## Setup Instructions  

### Prerequisites  

Before running the project, ensure you have the following:  

- **Node.js** and **npm** installed  
- A **Firebase account** set up  
- A **Firebase project** created  

### Firebase Configuration  

1. Go to the [Firebase Console](https://console.firebase.google.com/).  
2. Create a new project.  
3. Enable **Authentication** → **Sign-in methods** → **Google OAuth**.  
4. Set up **Firestore Database**.  

> **Note:** The app may also be deployed using Firebase Hosting in the future.  

## How It Works  

### Authentication  

- Users can log in or sign up using **Google OAuth**.  
- Firebase handles authentication and returns user credentials.  

### Podcast Creation & Joining  

#### **1. Create a Podcast**  
- A **6-digit unique code** is generated for each podcast session.  
- **SDP (Session Description Protocol) data** is stored in Firestore.  

#### **2. Join a Podcast**  
- Users enter the **6-digit code** to retrieve SDP details from Firestore.  
- WebRTC establishes a **direct peer-to-peer connection** for real-time communication.  

### WebRTC Integration  

- Uses **RTCPeerConnection** for WebRTC signaling.  
- Implements **ICE (Interactive Connectivity Establishment)** for NAT traversal.  
- Firestore is used for storing **SDP offers/answers** and **ICE candidates**.  
