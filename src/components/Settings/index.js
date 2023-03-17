import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleAllowLikes, toggleDislikes } from "../../redux/settingsSlice";

function Settings() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleAllowLikesClick = () => {
    dispatch(toggleAllowLikes()); // we dispatch the named variable here
  };
  const handleAllowDislikesClick = () => {
    dispatch(toggleDislikes());
  };
  return (
    <div className="settings-component">
      <h2>Settings</h2>
      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={settings.allowLikes}
            onChange={handleAllowLikesClick}
          />
          Allow Likes
        </label>
      </div>

      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={settings.allowDislikes}
            onChange={handleAllowDislikesClick}
          />
          Allow Dislikes
        </label>
      </div>
    </div>
  );
}
export default Settings;
