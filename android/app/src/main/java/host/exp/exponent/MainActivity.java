package host.exp.exponent;

import android.os.Bundle;
import android.annotation.TargetApi;
import android.os.Build;
import android.support.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;
import com.facebook.react.bridge.Callback;

import org.unimodules.core.interfaces.Package;

import java.util.List;

import host.exp.exponent.experience.DetachActivity;
import host.exp.exponent.generated.DetachBuildConstants;

import javax.annotation.Nullable;

public class MainActivity extends DetachActivity implements PermissionAwareActivity {

  private @Nullable   Callback mPermissionsCallback;
  private @Nullable PermissionListener mPermissionListener;
  @Nullable
  private PermissionListener permissionListener;

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@vincecoppola/mystery";
  }

  @Override
  public String developmentUrl() {
    return DetachBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public List<Package> expoPackages() {
    return ((MainApplication) getApplication()).getExpoPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }

  @Override
  @TargetApi(Build.VERSION_CODES.M)
  public void requestPermissions(String[] permissions, int requestCode, PermissionListener listener) {
    mPermissionListener = listener;
    requestPermissions(permissions, requestCode);
  }
  @Override
  public void onRequestPermissionsResult(final int requestCode, @NonNull final String[] permissions, @NonNull final int[] grantResults) {
    mPermissionsCallback = new Callback() {
      @Override
      public void invoke(Object... args) {
        if (mPermissionListener != null && mPermissionListener.onRequestPermissionsResult(requestCode, permissions, grantResults)) {
          mPermissionListener = null;
        }
      }
    };
  }
}