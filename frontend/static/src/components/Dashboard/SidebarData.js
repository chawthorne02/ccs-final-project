import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdAssignment } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: '/students',
    icon: <BsFillPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Lessons',
    path: '/lessons',
    icon: <MdAssignment />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <AiFillMessage />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Profile',
    path: '/edit-profile',
    icon: <AiFillEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <BiLogOut />,
    cName: 'nav-text'
  }
];