import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewSong() {

  const { id } = useParams();

  const [song, setSong] = useState({
    title: "",
    artist: "",
    source: "",
  });

  useEffect(() => {
    loadSong();
  }, []);

  const loadSong = async () => {
    const result = await axios.get(`http://localhost:8080/song/${id}`);
    setSong(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Song Details</h2>

          <div className="card">
            <div className="card-header">
              Details of song id: {song.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Title: </b>
                  {song.title}
                </li>
                <li className="list-group-item">
                  <b>Artist: </b>
                  {song.artist}
                </li>
                <li className="list-group-item">
                  <b>Source: </b>
                  {song.source}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
