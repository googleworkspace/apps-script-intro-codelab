/**
 * Copyright 2018-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @OnlyCurrentDoc */
function sendMap() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var address = sheet.getRange('A1').getValue();
    var map = Maps.newStaticMap().addMarker(address);
    GmailApp.sendEmail('YOUR_EMAIL_ADDR', 'Map',
            'See below.', {attachments:[map]});
}
