import axios from '../utils/axios';

export async function getUserList(params) {
  const url = `/users`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  throw response.status;
}

export async function getPostList(params) {
  const url = `/posts/?userId=${params.userId}&skip=${params.skip}&limit=${10}`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return Array.isArray(response.data)? response.data: [response.data];
  }
  throw response.status;
}

export async function getPostDetails(params) {
  const url = `/posts/${params.postId}`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  throw response.status;
}

export async function getCommentList(params) {
  const url = `/posts/${params.postId}/comments`;
  const response = await axios.get(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return Array.isArray(response.data)? response.data: [response.data];
  }
  throw response.status;
}

export async function deleteComment(params) {
  const url = `/posts/${params.postId}`;
  const response = await axios.delete(url, {});
  const isSuccess = response.status >=200 && response.status < 300;
  if (isSuccess) {
    return response.data;
  }
  throw response.status;
}
